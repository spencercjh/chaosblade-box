/*
 * Copyright 2025 The ChaosBlade Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.alibaba.chaosblade.box.common.sdk.parser;

import com.alibaba.chaosblade.box.common.sdk.entity.ChaosModels;
import java.io.IOException;
import java.io.InputStream;
import org.yaml.snakeyaml.Yaml;
import org.yaml.snakeyaml.constructor.Constructor;

/** @author Changjun Xiao */
public abstract class BaseYamlService implements YamlService {

  protected InputStream inputStream;

  @Override
  public void close() {
    if (inputStream != null) {
      try {
        inputStream.close();
      } catch (IOException e) {
      }
    }
  }

  @Override
  public ChaosModels parse(String source) {
    try {
      Yaml yaml = new Yaml(new Constructor(ChaosModels.class));
      inputStream = getInputStream(source);
      if (inputStream == null) {
        return null;
      }
      return yaml.load(inputStream);
    } finally {
      close();
    }
  }
}

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

package com.alibaba.chaosblade.box.common.sdk.entity;

import com.alibaba.chaosblade.box.common.sdk.util.StringUtil;

/** @author Changjun Xiao */
public class AliCdnResultBean {
  private String uid;
  private boolean success;
  private String error;
  private String[] output;

  public String getUid() {
    return uid;
  }

  public void setUid(String uid) {
    this.uid = uid;
  }

  public boolean isSuccess() {
    return success;
  }

  public void setSuccess(boolean success) {
    this.success = success;
  }

  public String getError() {
    return error;
  }

  public void setError(String error) {
    this.error = error;
  }

  public String[] getOutput() {
    return output;
  }

  public void setOutput(String[] output) {
    this.output = output;
  }

  public boolean completed(String cmd) {
    return !StringUtil.isBlank(uid);
  }
}

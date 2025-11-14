# Visual Code Chat Coding Pair Extension

## 重度使用者的聊天編碼配對與設計管理工具

這是一個為 VS Code 重度使用者設計的擴展，提供聊天式編碼配對和設計管理功能。

### 主要功能 / Main Features

#### 1. 聊天編碼配對 / Chat Coding Pair
- 啟動即時協作會話
- 追蹤程式碼變更
- 團隊溝通介面
- 自動連接選項

#### 2. 設計管理 / Design Management
- 設計文檔管理
- 架構決策記錄 (ADR)
- 團隊協作工具
- 設計模式追蹤

#### 3. 重度使用者優化 / Heavy User Optimizations
- 自動儲存優化
- 效能監控
- 快捷鍵增強
- 工作區優化
- 記憶體管理
- 響應時間優化

### 安裝 / Installation

1. 複製此儲存庫
2. 在 VS Code 中打開
3. 按 F5 執行擴展

### 使用方法 / Usage

#### 啟動編碼配對 / Start Coding Pair
使用命令面板 (Ctrl+Shift+P / Cmd+Shift+P) 執行：
- `開始編碼配對 / Start Coding Pair`

#### 開啟設計管理 / Open Design Management
使用命令面板執行：
- `設計管理 / Design Management`

#### 套用重度使用優化 / Apply Heavy User Optimizations
使用命令面板執行：
- `重度使用優化 / Heavy User Optimizations`

### 設定 / Configuration

在 VS Code 設定中可以配置：

```json
{
  "visualcode.heavyUser.enabled": true,
  "visualcode.codingPair.autoConnect": false,
  "visualcode.designManagement.syncEnabled": true
}
```

### 技術架構 / Technical Architecture

- **codingPairManager.js** - 管理編碼配對會話
- **designManagement.js** - 處理設計管理功能
- **heavyUserOptimizer.js** - 實現重度使用者優化

### 貢獻 / Contributing

歡迎提交問題和拉取請求！

### 授權 / License

MIT License

---

網頁更新與 VS Code 的自動化邏輯
Web updates and VS Code automation logic

# Visual Code Chat Coding Pair - 使用範例 / Usage Examples

## 快速開始 / Quick Start

### 1. 啟動編碼配對 / Starting Coding Pair

在 VS Code 中:
1. 按下 `Ctrl+Shift+P` (Windows/Linux) 或 `Cmd+Shift+P` (Mac)
2. 輸入 "開始編碼配對" 或 "Start Coding Pair"
3. 按下 Enter

這將開啟一個輸出通道，顯示即時協作會話資訊。

### 2. 開啟設計管理 / Opening Design Management

1. 按下 `Ctrl+Shift+P` / `Cmd+Shift+P`
2. 輸入 "設計管理" 或 "Design Management"
3. 按下 Enter

這將開啟設計管理 Webview 面板，提供以下功能：
- 設計文檔管理
- 架構決策記錄 (ADR)
- 團隊協作工具
- 設計模式追蹤

### 3. 套用重度使用優化 / Applying Heavy User Optimizations

1. 按下 `Ctrl+Shift+P` / `Cmd+Shift+P`
2. 輸入 "重度使用優化" 或 "Heavy User Optimizations"
3. 按下 Enter

這將自動套用以下優化：
- ✓ 自動儲存優化 (1秒延遲)
- ✓ 效能監控啟用
- ✓ 快捷鍵增強
- ✓ 工作區設定優化

## 設定配置 / Configuration

### 在 settings.json 中配置 / Configure in settings.json

打開 VS Code 設定 (`Ctrl+,` 或 `Cmd+,`)，然後點擊右上角的 "Open Settings (JSON)" 圖示。

```json
{
  // 啟用重度使用者優化 / Enable heavy user optimizations
  "visualcode.heavyUser.enabled": true,
  
  // 自動連接編碼配對 / Auto-connect to coding pair
  "visualcode.codingPair.autoConnect": false,
  
  // 啟用設計管理同步 / Enable design management sync
  "visualcode.designManagement.syncEnabled": true
}
```

## 使用場景 / Use Cases

### 場景 1: 遠端協作 / Scenario 1: Remote Collaboration

當你需要與遠端團隊成員進行程式碼配對時：

1. 啟動編碼配對會話
2. 編輯檔案時，變更會自動記錄在輸出通道
3. 團隊成員可以看到即時的修改記錄

### 場景 2: 架構設計討論 / Scenario 2: Architecture Design Discussion

當需要記錄重要的架構決策時：

1. 開啟設計管理面板
2. 創建新的架構決策記錄
3. 記錄決策內容、理由和影響
4. 與團隊共享設計文檔

### 場景 3: 效能優化 / Scenario 3: Performance Optimization

對於重度使用 VS Code 的開發者：

1. 執行重度使用優化命令
2. 檢視效能監控輸出通道
3. 根據記憶體使用和回應時間調整工作流程

## 快捷鍵建議 / Recommended Keyboard Shortcuts

你可以在 `keybindings.json` 中設定自訂快捷鍵：

```json
[
  {
    "key": "ctrl+alt+p",
    "command": "visualcode.startCodingPair",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+alt+d",
    "command": "visualcode.openDesignManagement"
  },
  {
    "key": "ctrl+alt+o",
    "command": "visualcode.heavyUserOptimizations"
  }
]
```

## 常見問題 / FAQ

### Q: 編碼配對會話會影響效能嗎？
A: 不會。編碼配對只是記錄檔案變更，對效能影響微乎其微。

### Q: 設計管理的資料儲存在哪裡？
A: 目前版本中，設計管理資料暫存在記憶體中。未來版本將支援持久化儲存。

### Q: 重度使用優化會修改我的設定嗎？
A: 是的，但只會修改效能相關的設定，不會影響你的個人偏好設定。

## 支援與反饋 / Support and Feedback

如有問題或建議，請在 GitHub 儲存庫提交 Issue。

For questions or suggestions, please submit an issue in the GitHub repository.

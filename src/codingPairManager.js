/**
 * Coding Pair Manager
 * 編碼配對管理器 - 管理聊天式編碼配對功能
 */

const vscode = require('vscode');

class CodingPairManager {
    constructor() {
        this.isActive = false;
        this.pairSession = null;
    }

    /**
     * Start a coding pair session
     * 啟動編碼配對會話
     */
    async start() {
        if (this.isActive) {
            vscode.window.showWarningMessage(
                '編碼配對已在運行中 / Coding pair session already active'
            );
            return;
        }

        // Create output channel for pair communication
        this.pairSession = vscode.window.createOutputChannel('Coding Pair Chat');
        this.pairSession.show();
        this.pairSession.appendLine('=== 編碼配對會話已啟動 / Coding Pair Session Started ===');
        this.pairSession.appendLine('');
        this.pairSession.appendLine('歡迎使用聊天式編碼配對功能！');
        this.pairSession.appendLine('Welcome to Chat Coding Pair!');
        this.pairSession.appendLine('');
        this.pairSession.appendLine('功能 / Features:');
        this.pairSession.appendLine('- 即時協作 / Real-time collaboration');
        this.pairSession.appendLine('- 設計討論 / Design discussions');
        this.pairSession.appendLine('- 程式碼審查 / Code reviews');
        this.pairSession.appendLine('');

        this.isActive = true;

        // Register text document change listener for collaboration
        this.setupCollaborationListener();
    }

    /**
     * Setup collaboration listener
     * 設置協作監聽器
     */
    setupCollaborationListener() {
        vscode.workspace.onDidChangeTextDocument((event) => {
            if (this.isActive && this.pairSession) {
                const changes = event.contentChanges;
                if (changes.length > 0) {
                    const timestamp = new Date().toLocaleTimeString();
                    this.pairSession.appendLine(
                        `[${timestamp}] 檔案修改 / File modified: ${event.document.fileName}`
                    );
                }
            }
        });
    }

    /**
     * Stop the coding pair session
     * 停止編碼配對會話
     */
    stop() {
        if (this.pairSession) {
            this.pairSession.appendLine('');
            this.pairSession.appendLine('=== 編碼配對會話已結束 / Coding Pair Session Ended ===');
            this.pairSession.dispose();
            this.pairSession = null;
        }
        this.isActive = false;
    }

    /**
     * Send a message in the pair session
     * 在配對會話中發送訊息
     */
    sendMessage(message) {
        if (this.isActive && this.pairSession) {
            const timestamp = new Date().toLocaleTimeString();
            this.pairSession.appendLine(`[${timestamp}] ${message}`);
        }
    }
}

module.exports = CodingPairManager;

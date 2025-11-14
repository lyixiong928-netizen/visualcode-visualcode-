/**
 * Visual Code Chat Coding Pair Extension
 * 重度使用者的聊天編碼配對與設計管理擴展
 */

const vscode = require('vscode');
const CodingPairManager = require('./codingPairManager');
const DesignManagement = require('./designManagement');
const HeavyUserOptimizer = require('./heavyUserOptimizer');

/**
 * Extension activation
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Visual Code Chat Coding Pair extension is now active');

    // Initialize managers
    const codingPairManager = new CodingPairManager();
    const designManagement = new DesignManagement();
    const heavyUserOptimizer = new HeavyUserOptimizer();

    // Register command: Start Coding Pair
    let startCodingPair = vscode.commands.registerCommand(
        'visualcode.startCodingPair',
        async () => {
            try {
                await codingPairManager.start();
                vscode.window.showInformationMessage(
                    '編碼配對已啟動 / Coding Pair started'
                );
            } catch (error) {
                vscode.window.showErrorMessage(
                    `啟動編碼配對失敗 / Failed to start Coding Pair: ${error.message}`
                );
            }
        }
    );

    // Register command: Open Design Management
    let openDesignManagement = vscode.commands.registerCommand(
        'visualcode.openDesignManagement',
        async () => {
            try {
                await designManagement.open();
                vscode.window.showInformationMessage(
                    '設計管理已開啟 / Design Management opened'
                );
            } catch (error) {
                vscode.window.showErrorMessage(
                    `開啟設計管理失敗 / Failed to open Design Management: ${error.message}`
                );
            }
        }
    );

    // Register command: Heavy User Optimizations
    let heavyUserOptimizations = vscode.commands.registerCommand(
        'visualcode.heavyUserOptimizations',
        async () => {
            try {
                await heavyUserOptimizer.apply();
                vscode.window.showInformationMessage(
                    '重度使用優化已套用 / Heavy User Optimizations applied'
                );
            } catch (error) {
                vscode.window.showErrorMessage(
                    `套用重度使用優化失敗 / Failed to apply optimizations: ${error.message}`
                );
            }
        }
    );

    // Auto-apply heavy user optimizations if enabled
    const config = vscode.workspace.getConfiguration('visualcode');
    if (config.get('heavyUser.enabled')) {
        heavyUserOptimizer.applyAutoOptimizations();
    }

    // Add commands to subscriptions
    context.subscriptions.push(startCodingPair);
    context.subscriptions.push(openDesignManagement);
    context.subscriptions.push(heavyUserOptimizations);
}

/**
 * Extension deactivation
 */
function deactivate() {
    console.log('Visual Code Chat Coding Pair extension is now deactivated');
}

module.exports = {
    activate,
    deactivate
};

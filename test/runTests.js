/**
 * Basic test runner
 * 基本測試執行器
 * 
 * Note: This is a basic structure validation test.
 * Full tests require VS Code extension test environment.
 */

const fs = require('fs');
const path = require('path');

console.log('Running Visual Code Chat Coding Pair Extension Tests...');
console.log('執行 Visual Code 聊天編碼配對擴展測試...');
console.log('');

let testsPassed = 0;
let testsFailed = 0;

// Test 1: Check package.json exists and is valid
try {
    const packageJson = JSON.parse(
        fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8')
    );
    console.log('✓ package.json is valid');
    console.log('✓ package.json 有效');
    console.log(`  - Extension name: ${packageJson.name}`);
    console.log(`  - Version: ${packageJson.version}`);
    testsPassed++;
} catch (error) {
    console.error('✗ package.json validation failed:', error.message);
    testsFailed++;
}

// Test 2: Check all source files exist
const requiredFiles = [
    'src/extension.js',
    'src/codingPairManager.js',
    'src/designManagement.js',
    'src/heavyUserOptimizer.js'
];

for (const file of requiredFiles) {
    const filePath = path.join(__dirname, '../', file);
    if (fs.existsSync(filePath)) {
        console.log(`✓ ${file} exists`);
        testsPassed++;
    } else {
        console.error(`✗ ${file} not found`);
        testsFailed++;
    }
}

// Test 3: Check file syntax (basic check)
for (const file of requiredFiles) {
    try {
        const filePath = path.join(__dirname, '../', file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Basic syntax checks
        if (content.includes('module.exports')) {
            console.log(`✓ ${file} has proper exports`);
            testsPassed++;
        } else {
            console.error(`✗ ${file} missing module.exports`);
            testsFailed++;
        }
    } catch (error) {
        console.error(`✗ ${file} syntax check failed:`, error.message);
        testsFailed++;
    }
}

// Test 4: Check documentation exists
try {
    const readme = fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8');
    if (readme.includes('重度使用') && readme.includes('Heavy User')) {
        console.log('✓ README.md contains bilingual documentation');
        console.log('✓ README.md 包含雙語文檔');
        testsPassed++;
    } else {
        console.error('✗ README.md missing required content');
        testsFailed++;
    }
} catch (error) {
    console.error('✗ README.md check failed:', error.message);
    testsFailed++;
}

// Summary
console.log('');
console.log('==========================================');
console.log('Test Summary / 測試摘要:');
console.log(`  Passed / 通過: ${testsPassed}`);
console.log(`  Failed / 失敗: ${testsFailed}`);
console.log('==========================================');

if (testsFailed > 0) {
    console.log('\n✗ Some tests failed / 部分測試失敗');
    process.exit(1);
} else {
    console.log('\n✓ All tests passed! / 所有測試通過！');
    console.log('\nNote: Full integration tests require VS Code extension environment.');
    console.log('注意：完整的整合測試需要 VS Code 擴展環境。');
    process.exit(0);
}

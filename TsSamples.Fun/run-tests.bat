cd %~dp0
call npm install
call node %~dp0tests.js
pause
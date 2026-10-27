@echo off
REM ============================================================
REM  Fix for Vercel "Deployment was blocked"
REM  Cause: the commit author email is not verified on the
REM         GitHub account that owns the project (LauraFazio).
REM ============================================================
setlocal

cd /d "%~dp0"

git config user.name "Laura Fazio"
git config user.email "laura@mlcpresentations.com"

echo.
echo === Rewriting the last commit with the correct author ===
git commit --amend --reset-author --no-edit

echo.
echo === Force pushing (safe variant) ===
git push --force-with-lease origin main

echo.
echo Done. Vercel should now accept the deploy.
pause
endlocal

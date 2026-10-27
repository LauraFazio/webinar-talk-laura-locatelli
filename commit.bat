@echo off
REM ============================================================
REM  MLC — one-click commit + push
REM  Usage:  commit.bat "your message"   (message optional)
REM ============================================================
setlocal

cd /d "%~dp0"

echo.
echo === Security check: looking for leaked API keys ===
git grep -n -E "a1e16c7f|Api-Token: *[A-Za-z0-9]{20,}" -- ":(exclude)commit.bat" ":(exclude)SETUP.md" > nul 2>&1
if %errorlevel%==0 (
  echo.
  echo  !! POSSIBLE SECRET FOUND IN TRACKED FILES. Commit aborted.
  git grep -n -E "a1e16c7f|Api-Token: *[A-Za-z0-9]{20,}" -- ":(exclude)commit.bat" ":(exclude)SETUP.md"
  pause
  exit /b 1
)
echo OK - no secrets found.

set MSG=%~1
if "%MSG%"=="" set MSG=Update landing

echo.
echo === Staging ===
git add -A

echo.
echo === Committing ===
git commit -m "%MSG%"
if %errorlevel% neq 0 (
  echo Nothing to commit. Pushing an empty commit to trigger a Vercel deploy...
  git commit --allow-empty -m "Trigger deploy"
)

echo.
echo === Pushing to main ===
git push origin main

echo.
echo Done. Check the deploy at https://vercel.com/dashboard
pause
endlocal

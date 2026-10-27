@echo off
chcp 65001 > nul
title Pubblica la landing su GitHub
cd /d "%~dp0"

echo.
echo ==========================================================
echo   PUBBLICA LA LANDING SU GITHUB
echo   Repo: LauraFazio/webinar-talk-laura-locatelli
echo ==========================================================
echo.
echo   Se si apre una finestra del browser che chiede di
echo   accedere a GitHub, fai login con l'account LauraFazio
echo   e poi torna qui.
echo.
pause

echo.
echo --- Preparo la cartella (solo la prima volta) ---
if not exist .git (
  git init -b main
  git config user.name "Laura Fazio"
  git config user.email "laura@mlcpresentations.com"
  git add -A
  git commit -m "Landing Bucare lo schermo, live talk con Laura Locatelli (17 Nov 2026)"
)

echo.
echo --- Collego la cartella al repo su GitHub ---
git remote remove origin > nul 2>&1
git remote add origin https://github.com/LauraFazio/webinar-talk-laura-locatelli.git
if %errorlevel% neq 0 goto errore

echo.
echo --- Invio i file (puo' chiedere le credenziali) ---
git push -u origin main
if %errorlevel% neq 0 goto errore

echo.
echo ==========================================================
echo   FATTO. I file sono su GitHub.
echo.
echo   Ora torna da Claude e scrivi "fatto",
echo   cosi' prosegue con Vercel.
echo ==========================================================
echo.
pause
exit /b 0

:errore
echo.
echo ==========================================================
echo   QUALCOSA NON HA FUNZIONATO.
echo.
echo   Fai uno screenshot di questa finestra e mandalo a
echo   Claude: ti dice cosa fare.
echo ==========================================================
echo.
pause
exit /b 1

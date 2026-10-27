@echo off
chcp 65001 > nul
title Aggiorna la landing online
cd /d "%~dp0"

echo.
echo ==========================================================
echo   AGGIORNA LA LANDING ONLINE
echo   https://talk.mlcpresentations.com
echo ==========================================================
echo.
echo   Manda su GitHub le modifiche fatte alla cartella.
echo   Vercel se ne accorge da solo e ripubblica il sito
echo   in circa un minuto.
echo.
pause

echo.
echo --- Controllo che non ci siano chiavi segrete nei file ---
git grep -n -E "Api-Token: *[A-Za-z0-9]{20,}|a1e16c7f" -- ":(exclude)*.bat" ":(exclude)SETUP.md" > nul 2>&1
if %errorlevel%==0 (
  echo.
  echo  !! ATTENZIONE: sembra esserci una chiave segreta nei file.
  echo     Non pubblico. Manda questo messaggio a Claude.
  git grep -n -E "Api-Token: *[A-Za-z0-9]{20,}|a1e16c7f" -- ":(exclude)*.bat" ":(exclude)SETUP.md"
  pause
  exit /b 1
)
echo OK, nessuna chiave trovata.

set MSG=%~1
if "%MSG%"=="" set MSG=Aggiornamento landing

echo.
echo --- Preparo e salvo le modifiche ---
git add -A
git commit -m "%MSG%"
if %errorlevel% neq 0 (
  echo Nessuna modifica da salvare. Forzo comunque una ripubblicazione.
  git commit --allow-empty -m "Ripubblica"
)

echo.
echo --- Invio a GitHub ---
git push origin main
if %errorlevel% neq 0 goto errore

echo.
echo ==========================================================
echo   FATTO.
echo.
echo   Aspetta un minuto, poi ricarica la pagina:
echo   https://talk.mlcpresentations.com
echo ==========================================================
echo.
pause
exit /b 0

:errore
echo.
echo ==========================================================
echo   QUALCOSA NON HA FUNZIONATO.
echo   Fai uno screenshot di questa finestra e mandalo a Claude.
echo ==========================================================
echo.
pause
exit /b 1

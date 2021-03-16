@ECHO off
cls
:start
ECHO.
ECHO 1: Test API's
ECHO 2: Install Newman Dependency
set choice=
set /p choice=Type the option number:
@REM if not '%choice%'=='' set choice=%choice:~0,1%
if '%choice%'=='1' goto test_api
if '%choice%'=='2' goto install_newman
if ('%choice%'!='1' || '%choice%'!='2') goto end
ECHO "%choice%" is not valid, try again
ECHO.
goto start
:test_api
cd "C:\Users\Anass\Documents\MyAuclair\server_side\restapi"
cmd /k "newman run myauclairLocal.postman_collection.json -e MyAuclair.postman_globals.json"
goto start
:install_newman
cmd /k "npm i -g newman"
goto test_api
:end
pause
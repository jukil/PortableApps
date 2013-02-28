@echo off
echo Starting Zotero Standalone 
echo If you start Zotero for the first time, this may take a while.
echo Please wait...
START zotero.exe -profile "..\..\Data\profile"
ping -n 10 127.0.0.1 > NUL
EXIT
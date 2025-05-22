#!/bin/bash
cd /home/kavia/workspace/code-generation/profoliox-interactive-personal-showcase-94318-94325/main_container_for_profoliox
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi


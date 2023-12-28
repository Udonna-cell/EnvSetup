#!/bin/bash

# Create project folders
mkdir -p src/controllers src/models src/routes src/services src/utils tests/unit tests/integration
touch src/app.ts
touch tests/unit/UserController.test.ts tests/unit/OtherController.test.ts
touch tests/integration/apiRoutes.test.ts tests/integration/webRoutes.test.ts

# Create build and dependency folders
mkdir -p dist 
# node_modules

# Create TypeScript configuration files
# touch tsconfig.json tslint.json

# Create test runner configuration
touch .gitignore
echo "dist/" >> .gitignore

# Create package.json file
# echo '{
#   "name": "your-project-name",
#   "version": "1.0.0",
#   "main": "dist/app.js",
#   "scripts": {
#     "start": "node dist/app.js",
#     "test": "your-test-command-here"
#   },
#   "devDependencies": {
#     "@types/node": "latest",
#     "typescript": "latest",
#     "tslint": "latest"
#   },
#   "dependencies": {
#     // your runtime dependencies here
#   }
# }' > package.json

# Create README file
touch README.md

echo "Project structure created successfully!"
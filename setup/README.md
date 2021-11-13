# Setup instructions

1. Install Node.js

   - On Windows Subsystem for Linux (WSL2):

     1. Open wsl/Ubuntu terminal in VSCode

     2. Install cURL:

        ```
        sudo apt-get install curl
        ```

     3. Install nvm:
        Make sure to change `v0.39.0` to the most recent version, see: https://github.com/nvm-sh/nvm/releases

        ```
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
        ```

     4. Restart your terminal

     5. Verify the installation of `nvm`. It should output `nvm` if the installation was successful:

        ```
        command -v nvm
        ```

     6. Install Node.js:

        ```
        nvm install --lts
        ```

   - On MacOS:
     - Install homebrew, see: https://brew.sh/
     - Install Node.js via homebrew, see https://formulae.brew.sh/formula/node

2. Check if the installation was successful. Enter the following commands in your CLI:
   - `node --version`
   - `npm --version`

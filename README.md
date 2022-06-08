# wordle-angular
My own, slightly enhanced, wordle application built with client-side framework Angular.
- Picks a random word from a word list and provides the player with hints on how many matching letters, matching letters and positions, and length of their guesses.
- Keeps track of winstreaks as well as displays the actual word that was fetched underneath the guess input box
    - easily disable this feature by commenting out single HTML line before hosting/serving the application

# Breakdown
1. Provided all files within the source (src) directory of the Wordle application
    - due to the size of the complete Angular application and all dependency files generated being too large
    - everything I wrote was within the "src" directory, therefore to use these files:
            1. in console run CLI command "ng new wordle"
            2. Press "Enter" to accept initial setup questions (use CSS)
            3. replace the default generated "src" folder with this repository's "src" folder
            4. edit some files as noted below

# Notes
1. The wordle_api server-side file would need to be supplied a source of words in a text file (.txt)
    - either with a local directory path or a URL of an online word list text file
    - text file must be formatted as a **single word per line** as the program was written to expect such format
    - comments and source code in wordle_api mentions this note as well
2. Within the file **get-random-word.service.ts**, the callAPI() function must call the wordle_api and return an Observable json by doing the following:
    - provide the directory of wordle_api.php (file included in this repository but must be edited as mentioned by note #1)

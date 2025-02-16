# Random Data Generator (NestJS)

## Description
This NestJS project generates a random data file containing four types of printable objects:
- Alphabetical strings
- Real numbers
- Integers
- Alphanumeric strings (with random spaces before and after)

The generated file is exactly **10MB** in size, and each object is separated by a comma.

## Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd random-data-generator
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Script
1. Build the project:
   ```sh
   npm run build
   ```

2. Run the script:
   ```sh
   node dist/main.js
   ```

This will generate a file named `random_data.txt` in the root directory.

## Output File Location
The generated file will be found at:
```
challenge-a/dist/random_data.txt
```
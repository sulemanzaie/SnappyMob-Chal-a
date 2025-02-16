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
   git clone https://github.com/sulemanzaie/SnappyMob-Chal-a.git
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

##  Challenge A:
   ```sh
   npm run generate
   ```

## Challenge B:
   ```sh
   npm run read
   ```

## Challenge C:
1. Build docker image:
   ```sh
   docker build -t random-data-processor .
   ```
2. Run docker image:
   ```sh
   docker run -v "$(pwd)/app" random-data-processor
   ```

3. Save logs from Container
   ```sh
   docker logs my-container > output/processed_output.txt
   ```
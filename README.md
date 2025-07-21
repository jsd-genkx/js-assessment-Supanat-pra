# JavaScript Assessment: Find Your Hat

[Codecademy](https://www.codecademy.com/projects/practice/find-your-hat)

## Table of Contents

- [JavaScript Assessment: Find Your Hat](#javascript-assessment-find-your-hat)
  - [Table of Contents](#table-of-contents)
  - [Repo Instructions](#repo-instructions)
  - [Project Goals](#project-goals)
  - [Project Requirements](#project-requirements)
    - [Game Rules:](#game-rules)
  - [JavaScript Assessment Rubric](#javascript-assessment-rubric)
    - [Thinking Process](#thinking-process)

---

## Repo Instructions

1. Clone the assessment repository, open it in your working directory, commit your progress accordingly, and push the repository to share it with the instructors.
2. Read the instructions in the `README.md` file.
3. Start the project:

   ```terminal
   npm install
   npm run dev
   ```

4. Edit `package.json` file by updating the `"author"` field with your Zoom name.
5. Edit **Thinking Process** section at the end of the `README.md` file. 👉 [Go to Thinking Process](#thinking-process)

[🔝 Back to Table of Contents](#table-of-contents)

---

## Project Goals

- In this project, you’ll be building an interactive terminal game.
- The scenario is that the player has lost their hat in a field full of holes, and they must navigate back to it without falling down one of the holes or stepping outside of the field.

[🔝 Back to Table of Contents](#table-of-contents)

## Project Requirements

- Your project is centered on a `Field` class.
- Give your `Field` class a `.print()` method that prints the current state of the field.

  > The Field constructor should take a two-dimensional array representing the “field” itself.
  >
  > A field consists of a grid containing “holes” (O) and one “hat” (^).
  >
  > We use a neutral background character (░) to indicate the rest of the field itself.
  >
  > The player will begin in the upper-left of the field, and the player’s path is represented by \*.

  ```js
  const myField = new Field([
  	["*", "░", "O"],
  	["░", "O", "░"],
  	["░", "^", "░"],
  ]);

  // Output:
  *░O
  ░O░
  ░^░

  ```

- Your game should be playable by users. In order to facilitate this, build out the following behavior:

  - When a user runs `main.js`, they should be prompted for input and be able to indicate which direction they’d like to `move`.
  - After entering an instruction, the user should see a printed result of their current field map with the tiles they have visited marked with the player's path. They should be prompted for their next move.

[🔝 Back to Table of Contents](#table-of-contents)

### Game Rules:

**1. Wins by finding their hat.**

**2. Loses by landing on (and falling in) a hole.**

**3. Loses by attempting to move “outside” the field.**

**When any of the above occur, let the user know and end the game.**

[🔝 Back to Table of Contents](#table-of-contents)

---

## JavaScript Assessment Rubric

1. Class Method ที่ควรมีครบ: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- constructor
- moveRight
- moveLeft
- moveUp
- moveDown

2. Print Map (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

3. เดินได้ถูกต้อง & Update Map ได้ถูกต้อง (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- เลี้ยวซ้าย
- เลี้ยวขวา
- ขึ้น
- ลง

4. Game Logic: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- Wins by finding their hat
- Loses by landing on (and falling in) a hole.
- Attempts to move "outside" the field. (Warning message when actor attempts to move outside)

5. มี Random ตำแหน่ง: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- holes
- hat
- actor

6. Thinking process & Breakdown the steps of a thinking process (5 pts ครบถ้วน | 3 pts มีไม่ครบ | 0 pts ไม่มีเลย)

[🔝 Back to Table of Contents](#table-of-contents)

---

**Please Write Down Your Thinking Process Below:**

---

### Thinking Process

0. ทำความเข้าใจ variable class property instance ที่โจทย์ให้มา
1. ทำสิ่งที่คุ้นเคยจากการทำบ้านก่อนด้วยการจะทำ movePlayer function inside Field class
2. พอจะทำ movePlayer function จึงรู้ว่า ต้องรับค่าจาก prompt จึงสร้างตัวแปร const move = prompt('Input here: ') เพื่อส่งค่าให้ใน newGame.movePlayer(move)
3. เนื่องจาก game เป็นแบบลูป (เดิน reprint เดิน reprint) ไม่สิ้นสุดจนกว่าจะเจอบางเงื่อนไข จึงสร้าง this.gameRun = true ใน class Field มาเป็นเงื่อนไขที่จะใส่ใน while(newGame.gameRun) แล้วนำ code ทั้งหมดมาอยู่ข้างใน
4. วกกลับไปทำ movePlayer ต่อ ใช้ switch case ในการเช็ค move แต่ละ case แล้วเปลี่ยนตำแหน่งผ่าน this.positionRow และ this.positionCol
5. เริ่มต้นทำการ print function หากลองรันตอนนี้จะเห็นว่า array เป็นบรรทัดเดียวกัน เพื่อให้ output ออกมาแต่ละบรรทัด จึงใช้ for of เพื่อเรียกค่าใน array แต่ละค่าออกมาแต่ละบรรทัด
6. ลอง input เพื่อให้เดินแต่ไม่เกิดอะไรขึ้น ลองไล่ดูจึงพบว่า เราอัพเดท this.positionRow และ this.positionCol ก็จริง แต่ไม่ได้อัพเดท this.field array จึงเติม this.field[this.positionRow][this.positionCol] = pathCharacter เข้าไปใน movePlayer()
7. ตอนนี้รันเพื่อเดินได้แล้วแต่ติดที่ *(ดอกจันทร์) ซ้ำตามทางที่เดิน และ มีลูกน้ำขั้นระหว่าง element จึงแก้ปัญหาที่ 2 ด้วยการใช้ .join("");
8. แก้ปัญหา * ซ้ำตามทางที่เดิน ด้วยการสร้างตัวแปรใหม่ oldRow และ oldCol เพื่อให้เป็นตำแหน่งที่เคยเดินมาแล้วใส่ this.field[oldRow][oldCol] = fieldCharacter; เข้าไป
9. ต่อไปสร้างเงื่อนไขที่ทำให้แพ้และชนะด้วยการ กำหนดให้ (this.field[this.positionRow][this.positionCol] === hat) และ (this.field[this.positionRow][this.positionCol] === hole) ให้ print แพ้ชนะแล้วออกจากเกมลูปด้วยการเปลี่ยนตัวแปรที่เราเคยสร้างในข้อที่ 3 ซึ่งคือตัวแปร this.gameRun = false
10. ต่อไปสร้าง outside field check ด้วยเงื่อนไขที่เช็ค this.positionRow < 0 || this.positionRow >= this.field.length กับ this.positionCol < 0 || this.positionCol >= this.field[0].length
11. พบเจอปัญหาว่า this.positionRow และ this.positionCol ได้ถูกอัพเดทก่อนที่จะเข้า if ทั้งที่ตามหลักแล้วควรจะเช็ค if ก่อน แล้วค่อยนำตัวแปรไปขยับ ทำให้ *(ดอกจันทร์) ค้างอยู่นอกกรอบในลูปถัดไป จึงต้องทำการสร้าง let newRow = this.positionRow; let newCol = this.positionCol; เพื่อมารับค่า ++,-- ไปเช็ค ก่อนที่จะอัพเดทในตัวแปรของจริง (this.positionRow และ this.positionCol)
12. พบเจอปัญหา clear(this.field); ลบข้อความที่จะต้องการให้แสดงเมื่อ user input ผิด เช่น console.log(Invalid Input, move outside of field) ยังแก้ไม่ได้
13. ทำฟีเจอร์ random เริ่มจากการสร้าง function Randomize แล้วรับเอาค่าความกว้างแล้วความสูงของ field เราเข้าไป ด้วย width=this.field.length, height=this.field[0].length จากนั้นทำการสร้าง random hat เริ่มจากการเช็คทุก array ใน this.field โดยการใช้ for loop แล้วแทนที่ hat ในตำแหน่งที่เจอด้วย ░ ทำการสร้างตำแหน่งแบบสุ่มด้วย hatRow = Math.floor(Math.random() * height)ว และ hatCol = Math.floor(Math.random() * width); และเช็คว่าห้ามเป็นตำแหน่ง [0][0] ด้วย while loop

_Notes:_<br>
_- You can attach flowcharts, diagrams, and images as needed._<br>
_- The purpose of this section is not to explain your code but rather to convey your thoughts and ideas._

[🔝 Back to Table of Contents](#table-of-contents)

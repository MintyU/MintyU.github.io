---
title : 바닥에서 시작하는 C++ (9) - 파일 입출력
date : 2020-03-10
tags:
  - C++
keywords:
  - C
  - Object-Oriented Programming
  - 객체지향 프로그래밍
  - File io
  - 파일 입출력
---

## fstream

C++에서 입력과 출력을 관리하기 위해 사용했던 <iostream>헤더파일과 마찬가지로, 파일을 통한 데이터 입출력을 관리하는 헤더 파일은 <fstream>으로 정의되어 있습니다.

또한, <iostream>에서 입력은 istream, 출력은 ostream이라는 Class를 통해 정의된 것처럼 <fstream>에서 파일 열기(read)는 ifstream, 파일 쓰기(write)는 ofstream으로 Class가 정의되어 있습니다.
---
title: 바닥에서 시작하는 C++ (11) - 문자열(String)
date: 2020-04-30
tags:
  - C++
keywords:
  - C
  - C++
  - Object-Oriented Programming
  - 객체지향 프로그래밍
  - string
  - 문자열
  - length
  - size
  - find
---

## C++의 문자열?

C++은 문자열을 쉽게 다룰 수 있는 String Class를 제공합니다.

C++에서 String Class를 사용하기 위해서는 String 헤더 파일을 포함해야 합니다.

```cpp
#include <string>
```

또한, String Class는 std namespace에 속해 있으므로 `using namespace std;`를 사용하거나 직접 `std::string`을 통해 사용해야 합니다.

C++에서 String도 다른 일반적인 변수들처럼 사용됩니다.

다른 변수들과 마찬가지로 선언과 동시에 초기화를 해줄 수도 있고, 선언 후 나중에 초기화를 해줄 수도 있습니다.

다음 예제는 `using namespace std;`가 작성되어있다는 전제 하에 진행됩니다.

```cpp
string str = "Hello!";
// 선언과 동시에 초기화

string str;
str = "Welcome to Blog!";
// 선언 이후 초기화
```

### method?

String Class에서는 다양한 메소드들도 제공합니다.

다음 세 개 정도만 알아두어도 문자열을 쉽게 다룰 수 있습니다.

1. length()
2. size()
3. find()

간단히 사용 방법을 알아봅시다!

#### length(), size()

일반적으로, `length()`와 `size()`는 같은 값을 반환합니다.

이 둘이 완벽하게 같은 기능을 한다고 알고 있어도 사용하는데 별 무리는 없지만, 의미가 미묘하게 다릅니다.

`length()`메소드는 **문자열의 길이**를 나타내지만, `size()`메소드는 **string 객체가 메모리에서 실제 사용하고 있는 크기**를 나타냅니다.

사용 방법 자체는 둘이 같기때문에 따로 신경써주지 않아도 됩니다.

```cpp
string str = "Hello!";

cout << str.length(); // 6

cout << str.size(); // 6
```

#### find()

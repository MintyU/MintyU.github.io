---
title: 바닥에서 시작하는 C++ (11) - 문자열(String)
date: 2020-04-04
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

다음 세 개 정도만 알아두어도 간단한 문자열 컨트롤은 가능합니다.

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

`find()`는 문자열을 찾고, 그 문자열의 시작 위치를 반환하는 메소드입니다.

첫번째 인자로 찾을 '문자'나 '문자열'을 입력해주고, 두번째 인자로는 찾기 시작할 '위치'를 입력해줍니다.

두번째 인자의 default값은 0으로, 입력해주지 않으면 처음부터 탐색합니다.

`"Welcome to my blog!"`라는 문자열에서 `"my"`라는 문자열의 시작 위치를 출력하는 예제입니다.

```cpp
string str = "Welcome to my blog!";

cout << str.find("my"); // 11
```

`"W"`가 0번 index이므로 `"my"`가 처음 시작하는 위치인 11이 출력된 것을 볼 수 있습니다.

다음은 `"abbbba"`라는 문자열에서 두번째 `"a"`라는 문자의 시작 위치를 출력하는 예제입니다.

```cpp
string str = "abbbba";

cout << str.find("a", str.find("a") + 1); // 5
```

위 예제에서 두번째 인자로 입력한 `str.find("a")`는 0번째 index의 `"a"`를 찾고 0을 반환할 것입니다.

이 값에 1을 더해줘서 첫번째로 `"a"`가 등장한 위치 다음부터 탐색하도록 하여 2번째 `"a"`의 위치를 찾아 5라는 값을 반환하게 됩니다.

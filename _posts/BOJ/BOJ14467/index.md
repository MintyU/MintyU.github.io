---
title: 백준 [14467] - 소가 길을 건너간 이유 1
date: 2020-07-04
tags:
  - BOJ(C++)
keywords:
  - C++
  - cpp
  - Object-Oriented Programming
  - 객체지향 프로그래밍
  - 알고리즘
  - 백준
---

## 문제 정보

#### 제한
- 시간 제한 : 2초
- 메모리 제한 : 512MB

#### 출처
- Olympiad > USA Computing Olympiad > 2016-2017 Season > USACO 2017 February Contest > Bronze 1번

#### 알고리즘 분류
- 구현


## 문제

닭이 길을 건너간 이유는 과학적으로 깊게 연구가 되어 있지만, 의외로 소가 길을 건너간 이유는 거의 연구된 적이 없다. 이 주제에 관심을 가지고 있었던 농부 존은 한 대학으로부터 소가 길을 건너는 이유에 대한 연구 제의를 받게 되었다.

존이 할 일은 소가 길을 건너는 것을 관찰하는 것이다. 존은 소의 위치를 N번 관찰하는데, 각 관찰은 소의 번호와 소의 위치 하나씩으로 이루어져 있다. 존은 소를 10마리 가지고 있으므로 소의 번호는 1 이상 10 이하의 정수고, 소의 위치는 길의 왼쪽과 오른쪽을 의미하는 0과 1 중 하나다.

이 관찰 기록을 가지고 소가 최소 몇 번 길을 건넜는지 알아보자. 즉 같은 번호의 소가 위치를 바꾼 것이 몇 번인지 세면 된다.

## 입력

첫 줄에 관찰 횟수 N이 주어진다. N은 100 이하의 양의 정수이다. 다음 N줄에는 한 줄에 하나씩 관찰 결과가 주어진다. 관찰 결과는 소의 번호와 위치(0 또는 1)로 이루어져 있다.

## 출력

첫 줄에 소가 길을 건너간 최소 횟수를 출력한다.

#### <예제 입력 1>

```
8
3 1
3 0
6 0
2 1
4 1
3 0
4 0
3 1
```

##### <예제 출력 1>

`3`

## 풀이

문제의 핵심은 다음과 같다.

1. 소의 위치는 0과 1로 표현된다.

2. 위치가 0에서 1, 또는 1에서 0으로 바뀐 경우가 길을 건넌 경우에 해당한다.

문제의 입력 형식과 비교해 보았을 때, **소의 위치가 처음 초기화되는 경우**에는 길을 건넌 것으로 카운트하지 않으며, **소의 위치가 그대로인 경우**에도 카운트하지 않습니다.

```cpp
#include <iostream>
using namespace std;

int main() {

    int n = 0;

    int cow[11] = {-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1};
    // 소의 초기 위치를 -1로 설정(default)

    cin >> n;

    int count = 0;

    for (int i = 1; i <= n; i++)
    {
        int cownum, pos;

        cin >> cownum >> pos;  // test case 입력

        if (cow[cownum] == -1) { // 소의 위치가 default인 경우

            cow[cownum] = pos; // 입력값으로 초기화

        }

        else if (cow[cownum] != pos && cow[cownum] != -1)
        // 소의 위치가 -1이 아닌 다른 값으로 초기화되어있으며, 이미 초기화된 값과 다른 위치값을 입력받은 경우

        {
            cow[cownum] = pos; // 입력값으로 위치 재설정

            count += 1; // 이동 횟수 증가!
        }

    }

    cout << count << endl;

    return 0;
}
```

위 코드와 같이 **소의 위치가 처음 초기화되는 경우**와 **소의 위치가 그대로인 경우**만 체크해주더라도 쉽게 풀 수 있는 문제였습니다.

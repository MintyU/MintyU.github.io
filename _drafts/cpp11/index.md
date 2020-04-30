---
title: 바닥에서 시작하는 C++ (11) - 파일 입출력
date: 2020-04-05
tags:
  - C++
keywords:
  - C
  - Object-Oriented Programming
  - 객체지향 프로그래밍
  - File io
  - fstream
  - 파일 입출력
  - ofstream
  - ifstream
---

## fstream

C++에서 입력과 출력을 관리하기 위해 사용했던 `<iostream>`헤더파일과 마찬가지로, 파일을 통한 데이터 입출력을 관리하는 헤더 파일은 `<fstream>`으로 정의되어 있습니다.

또한, `<iostream>`에서 입력은 istream, 출력은 ostream이라는 Class를 통해 정의된 것처럼 `<fstream>`에서 파일 열기(read)는 ifstream, 파일 쓰기(write)는 ofstream으로 Class가 정의되어 있습니다. 'i'와 'o'는 각각 in과 out을 의미합니다.

`<iostream>`헤더와 `<fstream>`헤더에서는 공통적으로 데이터의 이동 방향을 철저히 '실행 파일'기준으로 처리합니다.

예를 들자면, `<iostream>`을 통해 실행 파일에 데이터를 '입력'하는 것이 istream이며 '출력'하는 것이 ostream이지만

실행 파일에서 `<fstream>`을 통해 txt파일에 데이터를 '입력'하는것은 ofstream이며, 파일로부터 데이터를 불러오는 것은 ifstream입니다.

사실 이렇게 해석하면 굉장히 혼란의 여지가 많습니다.

실행 파일에서 `<fstream>`을 통해 txt파일로 데이터를 '출력'(내보내는 것)이 ofstream이며, txt파일로부터 데이터를 '입력'받는것을 ifstream이라고 해석하는 것이 자연스럽습니다.

### ifstream

우선 텍스트파일로부터 데이터를 읽어오는 ifstream에 대해 먼저 알아보겠습니다.

ifstream 객체를 하나 생성하고, 읽어올 파일을 선택해야 합니다.

이 방법에는 두 가지 방법이 있습니다.

첫째는 선언과 동시에 파일을 지정해주는 방법입니다.

```cpp
ifstream fin("text.txt");
```

둘째는 선언 후 파일을 지정해주는 방법입니다.

```cpp
ifstream fin;
fin.open("text.txt");
```

위의 두 예제 모두 `fin`이라는 이름의 객체가 `"text.txt"`파일을 열어놓은 상태입니다.

파일이 제대로 열렸는지를 확인하는 방법은 다음과 같습니다(ifstream 객체의 이름을 fin으로 설정했다는 가정 하에 진행합니다.)

```cpp
if (!fin)
{
    cout << "Error, no such file exists" << endl;
    exit(100);
}
```

위 코드는 열려고 하는 파일이 존재하지 않을 때, 에러 메시지를 출력하며 프로그램을 종료합니다.

파일이 잘 열렸다면, 이제 파일 안에 있는 데이터를 가져올 차례입니다.

텍스트 파일의 내용은 다음과 같다고 가정하겠습니다.

> text.txt
>
> ```
> 1
> 2
> 3
> 4
> 5
> ```

이제 `<iostream>`헤더파일의 `cin`의 사용법과 비슷하게 정의해놓은 `fin`을 사용하면 됩니다.

다음은 `text.txt`의 내용을 읽어와서 출력하는 예제입니다.

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream fin("text.txt"); // fin 객체 생성(cin 처럼 이용!)
    if (!fin)
    {
        cout << "Error, no such file exists" << endl;
        exit(100);
    } // 파일 열림 확인

    int i;
    while (true)
    {
        fin >> i;
        if (fin.eof()) // 읽어올 파일의 끝이면(End Of File)
        {
            break; // 읽기를 마치고 반복문을 나간다.
        }
        cout << i << endl;
    }

    fin.close(); // 파일 닫기

    return 0;
}
```

main함수 안의 반복문을 통해 파일에서 한 단어씩 읽어온 후, 출력하는 예제입니다.

`fin.eof()`는 `fin`을 통해서 읽어온 파일의 끝에 도달하면, True를 리턴합니다.

이를 통해 조건문으로 파일의 끝까지 읽었을 때 반복문을 탈출하도록 할 수 있습니다.

파일을 열고 잘 출력까지 마무리했다면, 파일을 닫아줄 차례입니다.

예제의 `fin.close()`가 바로 그 역할입니다.

사용 후 닫지 않는다면 열려있는동안 파일이 Lock되거나 다른 사람이 이용하지 못하게 될 수 있으므로, 사용 후에는 꼭 닫아주도록 합시다.

#### 한 줄씩 입력을 받고 싶다면?

ifstream도 cin과 마찬가지로 화이트스페이스(whitespace)를 기준으로 입력을 구분합니다.

따라서, 스페이스바를 통한 공백이나 줄바꿈을 통해 입력을 구분하게 됩니다.

하지만, 단어가 아닌 문장으로, 띄어쓰기에 상관없이 한 줄씩 입력을 받고 싶다면 `std::getline(입력스트림 객체, 문자열 변수)`를 이용하면 됩니다.

> ```
> lorem.txt
>
> Lorem ipsum dolor sit amet,
> consectetur adipiscing elit,
> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
> ```

위와 같은 텍스트가 있다고 가정한 후, 한 줄씩 읽어와서 출력해주는 예제입니다.

```cpp
#include <fstream>
#include <iostream>
#include <string>
using namespace std;

int main()
{
    ifstream fin("lorem.txt"); // fin 객체 생성(cin 처럼 이용!)
    if (!fin)
    {
        cout << "Error, no such file exists" << endl;
        exit(100);
    } // 파일 열림 확인

    string str;
    while (getline(fin, str)) // 파일이 끝날때까지 한 줄씩 읽어오기
    {
        cout << str << endl;
    }

    fin.close(); // 파일 닫기

    return 0;
}
```

### ofstream

ofstream은 데이터를 외부 파일로 저장하는 역할을 합니다.

ifstream과 마찬가지로, ofstream 객체를 만들고 데이터를 내보낼 파일 이름을 지정해줍니다.

```cpp
ofstream fout("result.txt");
// 선언과 동시에 파일 이름 지정

ofstream fout;
fout.open("result.txt");
// 선언 후 파일 이름 지정
```

이렇게 선언한 후, 앞에서 fin을 cin처럼 사용한것과 같이 fout을 cout처럼 사용해주면 됩니다.

ofstream에서는 지정해준 파일의 이름이 없더라도 자동으로 생성해주므로 굳이 파일이 없는 경우 오류를 출력할 필요가 없습니다.

또한, 이미 내용이 저장되어 있는 파일을 지정하고 데이터를 저장해주었을 경우 내용을 덮어쓰게 됩니다.

**즉, 이미 저장되어있던 내용은 삭제되고, 새로운 내용이 저장됩니다.**

다음은 ofstream을 통해 `result.txt`에 1부터 5까지 줄을 바꾸어 하나씩 저장하는 예제입니다.

```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
	ofstream fout("result.txt");

    for(int i = 1; i <= 5; i++)
    {
        fout << i << endl;
    }
	return 0;
    fout.close();
}
```

코드를 실행하면 실행한 디렉토리 안에 다음과 같은 텍스트 파일이 생성됩니다.

> ```
> result.txt
>
> 1
> 2
> 3
> 4
> 5
>
> ```

여기까지 C++로 외부 파일과 입출력을 통해 상호작용하는 방법에 대해 알아보았습니다.

아마 다른 언어로 이미 파일 입출력을 학습했던 경험이 있다면 크게 어렵게 느껴지지는 않을 것이라 예상됩니다.

(파이썬에서의 파일 입출력 방식과 굉장히 비슷하다고 느꼈습니다.)

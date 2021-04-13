---
title: 자연어 처리(NLP)의 전처리 - 토큰화
date: 2021-04-07
tags:
  - Pytorch
keywords:
  - Pytorch
  - Deep Learning
  - Machine Learning
  - NLP
  - Natural Language Processing
  - 머신러닝
  - 딥러닝
  - 자연어 처리
  - 토큰화
  - Tokenize
---

자연어 처리는 일반적으로 토큰화, 단어 집합 생성, 정수 인코딩, 패딩, 벡터화의 과정을 거치게 됩니다. pytorch를 통한 자연어 처리를 진행하기 전에, 이 일련의 과정들을 알아보도록 하겠습니다.

## 토큰화(Tokenization)

주어진 텍스트를 단어 또는 문자 단위로 자르는 것을 **토큰화**라고 합니다.

### 1. 띄어쓰기로 토큰화

```python
# 토큰화 전
"It does not matter how slowly you go as long as you do not stop"
```
<br/>

```python
# 토큰화 후
['It', 'does', 'not', 'matter', 'how', 'slowly', 'you', 'go', 'as', 'long', 'as', 'you', 'do', 'not', 'stop']
```
<br/>
영어의 경우, 띄어쓰기 단위로 토큰화를 진행해도 단어들 간에 구분이 명확하기 때문에 토큰화 작업이 수월합니다. 하지만, 한국어의 경우 조사, 접사 등으로 인해 단순 띄어쓰기 단위로 토큰화를 진행하게 되면 같은 단어일지라도 조사와 접사 때문에 다른 단어로 인식되기 때문에 단어 집합(vocabulary)의 크기가 지나치게 커지는 문제가 존재합니다. 따라서 한국어의 경우 토큰화 과정이 영어에 비해 더 까다롭다고 할 수 있습니다.

### 2. 형태소 토큰화

```python
# 토큰화 전
"당신이 멈추지 않는 이상, 얼마나 천천히 가는지는 전혀 문제되지 않습니다"
```
<br/>

```python
# 토큰화 후
['당신', '이', '멈추', '지', '않', '는', '이상', ',', '얼마', '나', '천천', '히', '가', '는지', '는', '전혀', '문제', '되', '지', '않', '습니', '다']
```
<br/>
앞서 언급했듯, 한글의 경우는 띄어쓰기 단위로만 토큰화하는 경우 한계가 있기 때문에 위와 같이 단어를 형태소로 분리하여 토큰화를 진행하면 같은 의미의 단어끼리 보다 더 정확히 묶을 수 있게 됩니다.

### 3. 문자 토큰화

```python
# 토큰화 전
"A Dog Run back corner near spare bedrooms"
```
<br/>

```python
# 토큰화 후
['A', ' ', 'D', 'o', 'g', ' ', 'R', 'u', 'n', ' ', 'b', 'a', 'c', 'k', ' ', 'c', 'o', 'r', 'n', 'e', 'r', ' ', 'n', 'e', 'a', 'r', ' ', 's', 'p', 'a', 'r', 'e', ' ', 'b', 'e', 'd', 'r', 'o', 'o', 'm', 's']
```
<br/>

띄어쓰기, 형태소 이외에도 문자 단위로 토큰화를 진행하게 되는 경우도 있습니다.

## 토큰화 도구

영어의 경우 토큰화를 사용하는 도구로서 대표적으로 spaCy와 NLTK가 있습니다. 물론, 파이썬 기본 함수인 split으로 토큰화를 할 수도 있습니다.

다음과 같은 문장이 있다고 가정해봅시다.

```python
en_text = "A Dog Run back corner near spare bedrooms"
```

### 1. spaCy

```python
import spacy
spacy_en = spacy.load('en')

def tokenize(en_text):
    return [tok.text for tok in spacy_en.tokenizer(en_text)]

print(tokenize(en_text))
# ['A', 'Dog', 'Run', 'back', 'corner', 'near', 'spare', 'bedrooms']


```

### 2. NLTK

```python
import nltk
nltk.download('punkt')

from nltk.tokenize import word_tokenize
print(word_tokenize(en_text))
# ['A', 'Dog', 'Run', 'back', 'corner', 'near', 'spare', 'bedrooms']

```

### 3. split()

```python
print(en_text.split())
# ['A', 'Dog', 'Run', 'back', 'corner', 'near', 'spare', 'bedrooms']
```

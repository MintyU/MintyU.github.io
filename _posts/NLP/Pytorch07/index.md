---
title: 자연어 처리(NLP)의 전처리 - Word2Vec(워드투벡터) 실습
date: 2021-05-29
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
  - Word2Vec
  - 워드투벡터
  - 분산 표현
---

## Word2Vec 실습(EN)

영어 데이터를 통해 Word2Vec을 학습시켜보도록 하겠습니다. `gensim`이라는 파이썬 패키지에 Word2Vec이 이미 구현되어 있으므로, 우리는 이를 따로 구현할 필요 없이 Word2Vec을 사용할 수 있습니다.

우선 필요한 도구들을 import해주겠습니다.

```python
import nltk
nltk.download('punkt')
```

```python
import urllib.request
import zipfile
from lxml import etree
import re
from nltk.tokenize import word_tokenize, sent_tokenize
```

### 훈련 데이터

사용할 훈련 데이터는, ted 영상들의 자막 데이터입니다. 파일의 형식은 xml 파일입니다.

[해당 링크](https://wit3.fbk.eu/get.php?path=XML_releases/xml/ted_en-20160408.zip&filename=ted_en-20160408.zip)를 통해 내려받고 압축을 풀어서 `ted_en-20160408.xml`라는 이름의 파일을 설치할 수도 있고, 파이썬 코드를 통해 자동으로 설치할 수도 있습니다. 

```python
# 데이터 다운로드
urllib.request.urlretrieve("https://raw.githubusercontent.com/GaoleMeng/RNN-and-FFNN-textClassification/master/ted_en-20160408.xml", filename="ted_en-20160408.xml")
```
<br/>
위의 코드를 통해 xml 파일을 내려받으면, 다음과 같은 파일을 볼 수 있습니다.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xml language="en"><file id="1">
  <head>
    <url>http://www.ted.com/talks/knut_haanaes_two_reasons_companies_fail_and_how_to_avoid_them</url>

    ...

    <content>Here are two reasons companies fail: they only do more of the same, or they only do what's new.

    ...

    So let me leave you with this. Whether you're an explorer by nature or whether you tend to exploit what you already know, don't forget: the beauty is in the balance.
    Thank you.
    (Applause)</content>
</file>
<file id="2">
  <head>
    <url>http://www.ted.com/talks/lisa_nip_how_humans_could_evolve_to_survive_in_space</url>
    
    ...

    (Applause)</content>
</file>
</xml>

```

### 전처리

```python
targetXML=open('ted_en-20160408.xml', 'r', encoding='UTF8')
# xml 파일과 python 실행 위치가 같은 경로일 경우의 코드!
target_text = etree.parse(targetXML)
parse_text = '\n'.join(target_text.xpath('//content/text()'))
# xml 파일로부터 <content>와 </content> 사이의 내용만 가져온다.

content_text = re.sub(r'\([^)]*\)', '', parse_text)
# 정규 표현식의 sub 모듈을 통해 content 중간에 등장하는 (Audio), (Laughter) 등의 배경음 부분을 제거.
# 해당 코드는 괄호로 구성된 내용을 제거.

sent_text = sent_tokenize(content_text)
# 입력 코퍼스에 대해서 NLTK를 이용하여 문장 토큰화를 수행.

normalized_text = []
for string in sent_text:
     tokens = re.sub(r"[^a-z0-9]+", " ", string.lower())
     normalized_text.append(tokens)
# 각 문장에 대해서 구두점을 제거하고, 대문자를 소문자로 변환.

result = []
result = [word_tokenize(sentence) for sentence in normalized_text]
# 각 문장에 대해서 NLTK를 이용하여 단어 토큰화를 수행.
```

전처리 과정 후, 샘플의 수를 출력하면 다음과 같습니다.

```python
print('총 샘플의 개수 : {}'.format(len(result)))
```
```
총 샘플의 개수 : 273424
```

전처리가 되었으니, 이제 Word2Vec을 통해 텍스트 데이터를 학습시켜줍니다.

### Word2Vec 학습

Word2Vec 훈련에 앞서, gensim 모듈이 없다면 설치해줍니다.
```
$ pip install gensim
```
<br/>
설치가 완료되었다면, 아래의 코드를 통해 아까 전처리한 데이터를 Word2Vec 모델로 학습시켜줍니다.

```python
from gensim.models import Word2Vec, KeyedVectors
model = Word2Vec(sentences=result, vector_size=100, window=5, min_count=5, workers=4, sg=0)
```

여기서 Word2Vec의 하이퍼파라미터값은 다음과 같습니다.

- **vector_size** = 워드 벡터의 특징 값. 즉, 임베딩 된 벡터의 차원.
- **window** = 컨텍스트 윈도우 크기
- **min_count** = 단어 최소 빈도 수 제한 (빈도가 적은 단어들은 학습하지 않는다.)
- **workers** = 학습을 위한 프로세스 수
- **sg** = 0은 CBOW, 1은 Skip-gram.


Word2Vec에 대해서 학습을 진행하였습니다. Word2Vec는 입력한 단어에 대해서 가장 유사한 단어들을 출력하는 `model.wv.most_similar`을 지원합니다. 

earth와 유사한 단어는 어떤 것들이 있을까요?

```python
model_result = model.wv.most_similar("earth")
print(model_result)
```

```
[('planet', 0.8294868469238281), 
('mars', 0.7876790165901184), 
('surface', 0.683158278465271), 
('sun', 0.6683340072631836), 
('ocean', 0.6607442498207092), 
('moon', 0.6605572700500488), 
('continent', 0.6459723711013794), 
('universe', 0.6119515895843506), 
('galaxy', 0.6062458753585815), 
('orbit', 0.6049789786338806)]
```

earth와 유사한 단어로 planet, mars, surface, sun 등 정말 그럴싸한 단어들을 내놓는 것을 볼 수 있었습니다.

### 모델 저장, 로드

이렇게 학습시킨 Word2Vec 모델은 저장해두었다가 나중에 다시 로드해서 사용할 수 있습니다.

```python
model.wv.save_word2vec_format('./eng_w2v') # 모델 저장
loaded_model = KeyedVectors.load_word2vec_format("eng_w2v") # 모델 로드
```
<br/>

위의 `loaded_model`은 앞선 예제의 `model.wv` 변수와 동일하게 사용하면 됩니다.

```python
model_result = loaded_model.most_similar("earth")
print(model_result)
```
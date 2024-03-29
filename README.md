# yjh_wikipage
실행
```
git clone https://github.com/xrxJH/yjh_wikipage.git

npm i
npm run server
npm run dev
```
## 목차

[기능구현](#기능구현)

- [필수요구사항](#필수요구사항)

[트러블슈팅](#트러블슈팅)  
[고민한점](#고민한점)
- [요구사항분석](#요구사항분석)
[폴더구조](#폴더구조)

## 데모
![codinghub_demo](https://github.com/xrxJH/yjh_wikipage/assets/157004345/4ade21ef-43d0-4be6-a877-57a70ca684b7)


https://github.com/xrxJH/yjh_wikipage/assets/157004345/688458eb-a2e5-4d48-bbb7-4b98a526fcd6


## 기능구현

### 필수요구사항

#### [라우트](https://github.com/xrxJH/yjh_wikipage/blob/main/src/routes/router.tsx)

- 메인('/'), 상세('/wiki/detail/:id'), 글쓰기('/wiki/new')&수정 페이지('/wiki/edit')로 나누었습니다
  - 레이아웃의 Logo 클릭시 메인페이지로 이동
  - 메인의 wiki항목을 클릭하면 해당하는 wiki 상세페이지로 이동
  - 추가버튼, 수정버튼을 누르면 글쓰기&수정 페이지로 이동
- 글 작성 혹은 수정 후 다시 editor 페이지로 돌아가지 못하도록 replace: true 설정

#### 데이터 페치

- json server로 간단히 서버를 설정했습니다.
- 페쳐함수와 useQuery를 감싼 훅을 분리하여 재사용성을 높이고 코드 작성의 일관성을 개선했습니다.

#### 페이지네이션

- 5개씩 최신데이터 순으로 보여집니다. grid를 활용하여 5개가 되지 않아도 레이아웃이 무너지지 않습니다.
- tanstack-query의 paginated 패턴과 json server의 paginate param을 이용하여 5개씩, 최신데이터 순으로 정렬하여 페칭합니다 
![image](https://github.com/xrxJH/yjh_wikipage/assets/157004345/5889684a-51c1-4b37-b90e-4eea981e72e0)


#### CRUD

- axios와 tanstack-query(RQ)를 활용해 CRUD를 구현했습니다.

#### 유효성 검사 로직 분리

- react-hook-form과 zod를 이용하여 유효성검사 로직을 분리했습니다.    
  - [form훅](https://github.com/xrxJH/yjh_wikipage/blob/main/src/hooks/useWikiForm/useWikiForm.ts)       
  - [유효성 검증](https://github.com/xrxJH/yjh_wikipage/blob/main/src/hooks/useWikiForm/wikiFormSchema.ts)

#### [본문에 다른 게시글 제목 링크 걸기](https://github.com/xrxJH/yjh_wikipage/blob/main/src/components/wikiDetail/DescriptionContent.tsx)

- 모든 게시글의 id와 title을 select하여 반환하는 api를 통해 원하는 데이터를 가져옵니다.
- 정규식을 이용해 본문데이터에 게시글 title이 포함되어있다면 Link 태그로 감싸줍니다. 

#### 댓글란과 검색창은 디자인적 요소입니다.



## 트러블슈팅

#### 데이터 총 개수 구하기

배경: 페이지 네비게이터 숫자렌더링에 필요한 데이터의 총개수를 구하기 위해 x-total-count를 이용하기로 했으나 json-server가 기본으로 제공하는 header의 x-total-count 값을 찾지 못하는 문제 발생    
해결: json-server의 버전을 alpha버전이 아닌 것으로 다운그레이드하여 해결

## 기술스택

- `React`, `TypeScript`, `zustand`, `react-hook-form`, `zod`, `json-server`, `Axios`, `Tanstack-query(RQ)`
- 스타일:  `Tailwind`, `shadcn`
- 선정이유:
    - npm install을 통한 종속성 설치가 필요없음
    - compound pattern으로 디자인되어 배치 및 조작이 편리
    - Tailwind를 통한 간편한 커스텀

## 고민한점
- 실제 서비스 요구사항으로는 데이터 페칭이 이루어질 것이므로 json server를 이용하여 간단히 api 페치 환경을 구축했습니다.
- 컴포넌트 분리시 api호출과 컴포넌트가 가까이 위치하도록 분리했습니다.
- zustand를 통해 페이지네이션의 상태를 관리하고 있으나 새로고침시에는 게시글 페이지가 1이 되는 문제가 있습니다.   
    - 기능 기획의도에 따라 개선시킬수도, 유지할 수도 있는 현상이지만      
      만약 개선한다면 sessionStorage에 현재 페이지를 저장하고 sessionStorage의 상태를 recoil의 atom effect를 통해 감지하여 새로고침시에도 현재 게시글 페이지를 유지할 것 같습니다 
- 스타일링을 위한 라이브러리는 현재 디자인 가이드가 없는 상황이므로 0부터 만들어가기 보다는 만들어진 컴포넌트를 사용하는 것이 현 과제와 같은 프로토타입을 개발하는 데에 적합하다고 판단했습니다.

## 요구사항분석
피그마를 이용하여 간단히 필수요구사항을 시각화했습니다.
![image](https://github.com/xrxJH/yjh_wikipage/assets/157004345/fa1ff488-2062-4c9e-a7d3-a74715b7ab36)


## 폴더구조
components 
- [common] 각 2곳 이상의 쓰임을 갖는 공통컴포넌트
- [page 명] 각 페이지에서 쓰이는 컴포넌트
- [ui] shadcnUI가 제공하는 컴포넌트

hooks
데이터를 페칭하지 않는 커스텀 훅

service
- [axios] Axios를 활용한 페쳐들
- [queries] Tanstack-Query를 활용한 훅
```
📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜InputWithButton.tsx
 ┃ ┃ ┗ 📜PageNavigator.tsx
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📜WikiContainer.tsx
 ┃ ┃ ┣ 📜WikiList.tsx
 ┃ ┃ ┗ 📜WikiListItem.tsx
 ┃ ┣ 📂ui  // shadcn 컴포넌트
 ┃ ┃ ┣ 📜avatar.tsx
 ┃ ┃ ┣ 📜button.tsx
 ┃ ┃ ┣ 📜card.tsx
 ┃ ┃ ┣ 📜dropdown-menu.tsx
 ┃ ┃ ┣ 📜form.tsx
 ┃ ┃ ┣ 📜input.tsx
 ┃ ┃ ┣ 📜label.tsx
 ┃ ┃ ┣ 📜pagination.tsx
 ┃ ┃ ┣ 📜table.tsx
 ┃ ┃ ┣ 📜textarea.tsx
 ┃ ┃ ┣ 📜toast.tsx
 ┃ ┃ ┣ 📜toaster.tsx
 ┃ ┃ ┗ 📜use-toast.ts
 ┃ ┗ 📂wikiDetail
 ┃ ┃ ┣ 📜DescriptionContent.tsx
 ┃ ┃ ┗ 📜DropdownCustom.tsx
 ┣ 📂constants
 ┃ ┣ 📜endpoint.ts
 ┃ ┣ 📜path.ts
 ┃ ┗ 📜queryKey.ts
 ┣ 📂db
 ┃ ┗ 📜db.json
 ┣ 📂hooks
 ┃ ┗ 📂useWikiForm
 ┃ ┃ ┣ 📜useWikiForm.ts
 ┃ ┃ ┗ 📜wikiFormSchema.ts
 ┣ 📂lib
 ┃ ┗ 📜utils.ts
 ┣ 📂pages
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜Layout.tsx
 ┃ ┣ 📜NewAndEdit.tsx
 ┃ ┗ 📜WikiDetail.tsx
 ┣ 📂routes
 ┃ ┗ 📜router.tsx
 ┣ 📂service
 ┃ ┣ 📂axios
 ┃ ┃ ┣ 📂wiki
 ┃ ┃ ┃ ┗ 📜wiki.ts
 ┃ ┃ ┗ 📜fetcher.ts
 ┃ ┗ 📂queries
 ┃ ┃ ┗ 📜wiki.ts
 ┣ 📂types
 ┃ ┗ 📜wiki.d.ts
 ┣ 📂utils
 ┃ ┗ 📜formatTimeStamp.ts
 ┣ 📂zustand
 ┃ ┗ 📜wiki.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

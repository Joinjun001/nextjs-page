## next.js를 이용한 웹 게시판 만들기

코딩애플 강의를 보고 기초적인 기능을 구현했으며, 점차 디테일적인 부분 구현하기

사이트는 여기 들어가면 사용할수있다.
똥글쓰지마셈 (진지)
https://nextjs-dc.vercel.app

앞으로 버전 0.01 > 0.02 이런식으로 작성하기

# 0.01

css 수정함. 요소들의 width를 left 325 right 325로 고정
페이커갤러리 들어가면 글 리스트 보이게 수정
타이틀 width 수정

# 0.02

메인페이지에서 로그인하면 바로 글 리스트 보이게 수정함
회원가입페이지 가독성 수정(아직 서버로 가는 데이터 기능 설정은 안함)
글을 작성하는 input창 수정 => input을 textarea로 변경해야 글이 왼쪽상단부터 입력됨

# 0.04

글 리스트 로그인 안하고 들어갈시 오류 수정 > 좋아요 버튼에 session정보 들어가서 오류 발생했었음
회원가입할때 정규식에 안맞으면 빠꾸 기능 만듬
회원가입 성공하면 회원가입 성공햇다는 페이지 만듬

# 0.05

css 수정

# 0.06

글 제목누르고 엔터누를때 글 써지는거 수정

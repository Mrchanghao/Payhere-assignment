import { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { repoAsyncState, repoInfoState, repoState } from "../../atom/repoState";
import { SearchState } from "../../atom/searchState";
import { Button } from "../../components/Button";
import { FlexBox } from "../../components/FlexBox";
import { Header } from "../../components/Header";
import { RepoItem } from "../../components/RepoItem";
import { getQueryString, useRepos } from "../../api/searchRepos";
import { CustomRepo, Repo } from "../../types";
import { ListWrapper, ModalBtnBox, PageWrapper } from "./styles";
import { useRouter } from "../routing";
import ModalPortal from "../../components/Modal/Portal";
import { Modal } from "../../components/Modal";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { RepoList } from "../../components/RepoList";

export function SearchRepos() {
  const searchValue = useRecoilValue(SearchState);
  const [storeRepo, setStoreRepo] = useRecoilState(repoState);
  const [repoInfo, setRepoInfo] = useRecoilState(repoInfoState);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDescription, setModalDescription] = useState<{title: string; label: string} | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // api call
  // const repos = useRepos(page);
  
  // modal control function
  const modalControl = (open: boolean) => setModalOpen(open);
 
  // response rendering
  const validRepo = (newRepo: Repo, repoList: CustomRepo) => {
    return !!repoList.registeredRepo.find((el) => el.id === newRepo.id);
  };
  const registerRepo = (repo: Repo) => {
  
    const {
      id,
      name,
      owner: { login },
    } = repo;
  
    if (
      storeRepo.registeredRepo.length <= 4) {
      // 같은 repo 면 등록 안 되는 로직 구현 해야함
      setModalOpen(true);
      setModalDescription({title: '저장 할 수 없습니다', label: '저장 공간이 부족합니다. Storage를 삭제 후 진행해 주세요.'})
    } else if (validRepo(repo, storeRepo) === true) {
      setModalOpen(true);
      setModalDescription({title: '저장 할 수 없습니다', label: '이미 같은 repo 가 존재합니다.'})
    } else if (storeRepo.registeredRepo.length < 4 && validRepo(repo, storeRepo) === false) {
      setStoreRepo({
        registeredRepo: [
          ...storeRepo.registeredRepo,
          { id, name, owner: login },
        ],
      });
     setModalOpen(true);
     setModalDescription({title: '저장 되었습니다', label: 'localstorage 저장소에 저장되었습니다.'})
    }
    
  };
  return (
    <>
      <ModalPortal>
       <Modal 
       title={modalDescription && modalDescription.title}
       label={modalDescription && modalDescription.label}
       open={modalOpen} 
       onCloseModal={modalControl}>
        <ModalBtnBox>
          <Button onClick={() => modalControl(false)}>되돌아가기</Button>
        </ModalBtnBox>
      </Modal>
      </ModalPortal>
    <PageWrapper>
      
      <Header />
      
      
    <Suspense fallback={<FlexBox><LoadingIndicator /></FlexBox>}>
      <RepoList registerRepo={registerRepo} page={page}  />

    </Suspense>
    </PageWrapper>
    </>
  );
}

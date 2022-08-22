import { useState, useEffect } from "react";
import styles from "./pagination.module.css";
import { fetchPage, PaginationResponse } from "./api";
// 12:15 - 1:50 (includes building out api, wrapper, etc. )

type PaginationProps = {
  pageCount: number;
  currPage: number;
  clickCallback: Function;
};

const defaultPage: PaginationResponse = {
  status: 200,
  body: {
    pageCount: 0,
    title: "",
    content: "Loading...",
  },
};
type PLinkProps = { num: number; cb: Function; text?: string; active: boolean };

const PLink = ({ num, cb, text, active }: PLinkProps): JSX.Element => {
  const c = !active ? () => {} : () => cb(num);
  return (
    <button disabled={!active} className={styles.pLink} onClick={c}>
      {text || num}
    </button>
  );
};

const Pagination = ({
  pageCount,
  currPage,
  clickCallback,
}: PaginationProps): JSX.Element => {
  let pageLinks: JSX.Element[] = [];
  const start: number = Math.max(currPage - 5, 1);
  const pageEnd: number = Math.min(start + 10, pageCount);
  let firstLink: JSX.Element | undefined;
  let ellipsis1: string = "";
  let ellipsis2: string = "";
  let lastLink: JSX.Element | undefined;

  if (start !== 1) {
    ellipsis1 = start === 2 ? "" : ". . .";
    firstLink = <PLink num={1} cb={clickCallback} active={true} />;
  }

  if (pageCount > start + 10) {
    ellipsis2 = ". . .";
    lastLink = <PLink num={pageCount} cb={clickCallback} active={true} />;
  }

  for (let i = start; i <= pageEnd; i++) {
    pageLinks.push(
      <PLink key={i} num={i} cb={clickCallback} active={currPage !== i} />
    );
  }

  return (
    <div className={styles.pagination}>
      {start !== 0 ? (
        <PLink
          num={currPage - 1}
          cb={clickCallback}
          text={"<"}
          active={currPage !== 1}
        />
      ) : (
        ""
      )}
      {firstLink}
      {ellipsis1}
      {pageLinks}
      {ellipsis2}
      {lastLink}
      <PLink
        num={currPage + 1}
        cb={clickCallback}
        text={">"}
        active={currPage !== pageCount}
      />
    </div>
  );
};

export const PaginationApp = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [pageResponse, setPageResponse] =
    useState<PaginationResponse>(defaultPage);
  const { pageCount, title, content } = pageResponse?.body;

  useEffect(() => {
    defaultPage.body.pageCount = pageCount;
    setPageResponse(defaultPage);
    fetchPage(page).then((res) => {
      if (res) setPageResponse(res);
    });
  }, [page]);

  function handlePaginationClick(n: number) {
    setPage(n);
  }

  return (
    <div className={styles.wrapper}>
      <article className={styles.article}>
        <h1>{title}</h1>
        <p>{content}</p>
      </article>
      <Pagination
        currPage={page}
        pageCount={pageCount}
        clickCallback={handlePaginationClick}
      />
    </div>
  );
};

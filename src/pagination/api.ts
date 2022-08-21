export type PaginationResponse = {
  status: number;
  body: {
    pageCount: number;
    title: string;
    content: string;
  };
};

const blabla: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique id nisi ac suscipit. Donec condimentum tortor eu arcu luctus eleifend. Mauris consequat dolor id feugiat tincidunt. Mauris venenatis magna est, quis cursus justo venenatis quis. Duis tempor dui ac aliquam euismod. Aenean vitae scelerisque mi. Curabitur ut odio sit amet eros egestas blandit quis non lacus. Quisque viverra ipsum sit amet lorem suscipit sagittis.In sagittis, dui ac tincidunt efficitur, elit erat suscipit leo, non porttitor justo dolor sed libero. Nullam sit amet nisl quis risus maximus aliquet a vel purus. Nulla vehicula nunc vel enim eleifend, sit amet vulputate nulla pulvinar. Nullam aliquet enim sit amet diam finibus, sed finibus ligula mattis. Morbi sit amet nisi ex. Suspendisse scelerisque libero in mattis sagittis. Aenean eget neque sit amet ligula dignissim ornare. Ut lorem nisl, maximus vitae convallis et, venenatis nec elit. Curabitur scelerisque leo ut tincidunt convallis. Proin urna libero, lacinia quis augue vitae, imperdiet eleifend ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent ac nisl nibh. Vestibulum ultricies diam at purus vestibulum, porta mollis odio aliquet. Nullam tincidunt euismod nulla, eget porttitor tortor. Vivamus in erat risus. Nunc eget justo ut nibh blandit faucibus tempus at libero.";

export const fetchPage = async function (
  page: number
): Promise<PaginationResponse | undefined> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (page < 1 || page > 20) reject(new Error("page out of range"));
      resolve({
        status: 200,
        body: {
          pageCount: 20,
          title: `This is page number ${page}`,
          content: blabla.repeat(10),
        },
      });
    }, 1000);
  });
};

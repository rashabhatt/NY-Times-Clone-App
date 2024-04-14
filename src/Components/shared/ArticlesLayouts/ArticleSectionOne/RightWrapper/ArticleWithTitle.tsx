const ArticleWithTitle = (props: any) => {
  return (
    <a data-testid='article-with-title-link' href={props.data?.url}>
      <div>
        <img
          className='h-[135px] max-w-full'
          src={props.data?.multimedia[1].url}
          alt='article-with-title-image'
        />
      </div>

      <h2
        data-testid='article-with-title-title'
        className='text-[16px] leading-5 font-[700] mt-2'
      >
        {props.data?.title}
      </h2>
      <h3
        data-testid='article-with-title-type'
        className='text-[10px] font-[400] mt-1'
      >
        {props.data?.item_type}
      </h3>
    </a>
  );
};

export default ArticleWithTitle;

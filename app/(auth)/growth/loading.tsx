import loaderStyles from "@/styles/Loader.module.css";

const Loading = () => {
  return (
    <main className={loaderStyles.body}>
      <div className={loaderStyles.loader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </main>
  );
};

export default Loading;

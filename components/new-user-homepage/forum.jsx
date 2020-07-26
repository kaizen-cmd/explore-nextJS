const Forum = () => {
  return (
    <div>
      <div className="mt-5 mb-3">
        <div className="container px-3">
          <div className="d-flex justify-content-start">
            <div className="mr-2">
              <h3>Forum</h3>
            </div>
            <hr style={{ width: "92%" }} />
          </div>
        </div>
      </div>
      <div className="container text-center mb-5">
        <widgetbot
          server="725628554875895829"
          channel="726304080288415785"
          width="100%"
          height="500"
        ></widgetbot>
        <script src="https://cdn.jsdelivr.net/npm/@widgetbot/html-embed"></script>
      </div>
    </div>
  );
};

export default Forum;

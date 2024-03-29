import Carousel from 'components/reuseable/Carousel';
import { BlogCard4 } from 'components/reuseable/blog-cards'; // -------- data -------- //

//! THIS IS THE BLOG SECTION

const Blog2 = ({ posts, error }) => {
  {
    error && console.log(error.errorMessage);
  }
  const carouselBreakpoints = {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  };
  return (
    <div>
      <div className="row text-center">
        <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
          <h2 className="fs-15 text-uppercase text-primary mb-3">Blogs</h2>
          <h3 className="mb-6">Check Out Our Latest Articles</h3>
        </div>
      </div>
      {posts && (
        <div className="position-relative">
          <div
            className="shape bg-dot primary rellax w-17 h-20"
            style={{
              top: 0,
              left: '-1.7rem'
            }}
          />

          <div className="swiper-container dots-closer blog grid-view mb-6">
            <Carousel grabCursor spaceBetween={0} navigation={false} breakpoints={carouselBreakpoints}>
              {posts.map((post) => (
                <div className="item-inner" key={post.id}>
                  <BlogCard4 {...post} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
      {error && (
        <p style={{ textAlign: 'center', color: '#c54343' }}>
          Oops! There was a problem getting the blog articles. Please contact the web administrator.
        </p>
      )}
    </div>
  );
};

export default Blog2;

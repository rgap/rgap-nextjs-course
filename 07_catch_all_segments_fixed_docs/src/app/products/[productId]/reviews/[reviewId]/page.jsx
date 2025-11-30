export default function ReviewDetail({ params }) {
  return (
    //
    <>
      <div>ReviewDetail page</div>
      <div>
        Review {params.reviewId} for product {params.productId}
      </div>
    </>
  );
}

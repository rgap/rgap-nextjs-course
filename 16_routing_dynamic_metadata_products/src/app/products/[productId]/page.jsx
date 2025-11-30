export const generateMetadata = async ({ params }) => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    // This is the metadata title
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }) {
  return (
    //
    <div>ProductDetails page about product {params.productId}</div>
  );
}

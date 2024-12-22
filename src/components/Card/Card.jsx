import PropTypes from 'prop-types';

export const Card = ({image, title, date, readTime }) => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <img alt="Placeholder" className="block h-auto w-full" src={image} />

        <header className="leading-tight px-6 pt-4">
          <h5 className="font-body font-normal text-base text-btnColor">Do consectetur</h5>
          <h2 className="font-heading font-bold text-2xl text-headingColor py-2">{title}</h2>
        </header>
        <footer className="flex items-center justify-between leading-none px-6 pb-[27px]">
          <p className="font-body font-normal text-[#9095A1] text-sm">{date}</p>
          <p className="fomt-body font-normal text-sub1Color text-xs leading-5 bg-[#F3F4F6] p-2 rounded-full">
            {readTime} mins read
          </p>
        </footer>
      </article>
    </div>
  )
}
Card.propTypes = {
    image: PropTypes.shape({
        image: PropTypes.string.isRequired, 
      }).isRequired,  
    title: PropTypes.string.isRequired,  
    date: PropTypes.string.isRequired,   
    readTime: PropTypes.string.isRequired 
  };


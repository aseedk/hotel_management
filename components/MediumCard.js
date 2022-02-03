import Image from "next/image";
const MediumCard = ({img, location, distance}) => {
  return(
      <div className={'cursor-pointer hover:scale-105 transition transform duration-300 ease-out mb-5'}>
        <div className={'relative h-80 w-80'}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image src={img}
                 layout={'fill'}
                 className={'rounded-xl'}
          />
        </div>
          <div className={'absolute bottom-5 left-5'}>
              <h3 className={"text-4xl mb-3 w-64"}>{location}</h3>
              <p>{distance}</p>
          </div>
      </div>
  )
}
export default MediumCard;

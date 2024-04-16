import Link from "next/link";
import Image from "next/image";

const DrinksList = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map((drink) => {
        const { idDrink, strDrink, strDrinkThumb } = drink;
        return (
          <li key={idDrink}>
            <Link href={`/drinks/${idDrink}`} className="text-xl font-medium">
              <div className="relative h-48 mb-4">
                <Image
                  src={strDrinkThumb}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw"
                  alt={strDrink}
                  className="rounded-md object-cover"
                />
              </div>
              {strDrink}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default DrinksList;

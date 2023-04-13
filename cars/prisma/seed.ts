import {prisma} from "../src/config/database.js";

async function main() {
  await prisma.car.createMany({
    data: [
      { model: "HB20", licensePlate: "DCS4450", year: 2012, color: "BRANCO" },
    ],
  });
}

main()
  .then(() => console.log("OK"))
  .catch((e) => {
    console.log(e);
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

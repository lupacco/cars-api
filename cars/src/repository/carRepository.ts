import { prisma } from "../config/database.js";

async function getCars() {
  const data = await prisma.car.findMany();
  return data;
}

async function getCar(id: number) {
  const data = await prisma.car.findUnique({
    where: {
      id: id,
    }
  });
  return data;
}

async function getCarWithLicensePlate(licensePlate: string) {
  const data = await prisma.car.findUnique({
    where: {
      licensePlate : licensePlate,
    }
  });
  return data;
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  await prisma.car.create({
    data: {
      model: model,
      licensePlate: licensePlate,
      year: year,
      color: color
    }
  });
}

async function deleteCar(id: number) {
  await await prisma.car.delete({
    where: {
      id: id,
    }
  });
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;
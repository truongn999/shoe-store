export const getDiscountFromPrice = (originalPrice, disPrice) => {
  const dis = originalPrice - disPrice;
  const disPercent = dis / originalPrice * 100
  return disPercent.toFixed(2)
}
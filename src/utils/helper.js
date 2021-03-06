export const limitCharacters = (text, size = 30) =>
  text.length >= size
    ? `${text.substring(0, size).trim()}...`
    : text.trim();

export const formatDate = (timestamp) => {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export const generateUID = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export const firstLetterToUppercase = text => text.charAt(0).toUpperCase() + text.slice(1);

export const formatListToObject = list => list.reduce(
  (carry, element) => {
    if(!carry) {
      return {
        [element.id]: element
      }
    }
    carry[element.id] = element;
    return carry;
  },
null)
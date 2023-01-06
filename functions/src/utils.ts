export const buildResultsDocs = (docs: any) => {
    const data: any = [];
    docs.forEach((doc: any) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    return data;
  };
export default {
  async beforeCreate(event: { params: { data: Record<string, unknown> } }) {
    const { data } = event.params;
    if (!data.DateTime) {
      data.DateTime = new Date();
    }
  },
};

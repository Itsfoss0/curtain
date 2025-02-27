class Results {
  constructor (query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter () {
    const queryObj = { ...this.queryString };
    const excludedList = ['sort', 'page', 'range', 'limit', 'offset'];
    excludedList.forEach((field) => delete queryObj[field]);
    this.query.find(queryObj);
    return this;
  }

  paginate () {
    const queryObj = { ...this.queryString };
    const startPage = queryObj.page || 1;
    const limit = queryObj.limit || 10;
    this.query.skip(startPage * limit);
    this.query.limit(limit);

    return this;
  }

  sort () {
    const { sort } = { ...this.queryString };
    if (sort) {
      const sortBy = sort.split(',').reduce((acc, curr) => {
        const [field, order] = curr.split(':');
        acc[field] = order === 'asc' ? 1 : -1;
        return acc;
      }, {});
      console.log(sortBy);
      this.query.sort(sortBy);
    } else {
      this.query.sort('-createdAt');
    }
    return this;
  }

  async execute () {
    const results = await this.query;
    console.log(results);
    return results;
  }
}

module.exports = Results;

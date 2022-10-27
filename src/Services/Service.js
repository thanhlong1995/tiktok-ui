import * as request from '~/utils/httpRequest';

export const getAll = async () => {
    try {
        const res = await request.getAll(`user-info`);
        return res;
    } catch (error) {}
};

export const search = async (q, type = 'less') => {
    try {
        const res = await request.search(`users/search`, {
            params: {
                q,
                type: 'less',
            },
        });
        return res.data;
    } catch (error) {}
};

export const getByID = async (id) => {
    try {
        const res = await request.getByID(`user-info/${id}`);
        return res;
    } catch (error) {}
};

export const putByID = async (id, params = {}) => {
    try {
        const res = await request.putByID(`user-info/${id}`, params);
        return res;
    } catch (error) {}
};

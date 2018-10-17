export async function get(url) {
    const response = await fetch(url, {
        // credentials: "include",
    });

    if (!response.ok) {
        try {
            const data = await response.json();
            return [data, null];
        } catch (err) {
            return [{
                status: response.status,
                message: response.statusText,
            }, null];
        }
    }
    if (response.body instanceof ReadableStream) {
        return [null, response.body];
    }
    const data = await response.json();

    return [null, data];
}

export async function post(url, data, optionalHeaders) {
    let isFormData = false;
    let headers = { 'Content-Type': 'application/json' };
    if (data instanceof FormData) {
        isFormData = true;
        delete headers['Content-Type'];
    }

    const response = await fetch(url, {
        method: 'POST',
        headers,
        body: isFormData ? data : JSON.stringify(data),
        credentials: "include",
    });
    if (!response.ok) {
        try {
            const data = await response.json();
            return [data, null];
        } catch (err) {
            return [{
                status: response.status,
                message: response.statusText,
            }, null];
        }
    }
    const resolved = await response.json();
    return [null, resolved];
}

export async function put(url, data) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: "include",
    });
    if (!response.ok) {
        try {
            const data = await response.json();
            return [data, null];
        } catch (err) {
            return [{
                status: response.status,
                message: response.statusText,
            }, null];
        }
    }
    const resolved = await response.json();
    return [null, resolved];
}

export async function del(url, data) {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: "include",
    });
    if (!response.ok) {
        try {
            const data = await response.json();
            return [data, null];
        } catch (err) {
            return [{
                status: response.status,
                message: response.statusText,
            }, null];
        }
    }
    const resolved = await response.json();
    return [null, resolved];
}

import s from './Users.module.scss'
import { Alert, Button, Card, Col, Flex, Row } from "antd";

function Users ({ users, error, handleAddUser }) {

    if (error) return <Alert className={s.error} message={error} type='error' showIcon/>

    return (
        <>
            <Flex justify='center'>
                <Button type="primary" onClick={handleAddUser}>Add</Button>
            </Flex>
            <Row gutter={[16, 16]}>
                {users.map(({ name, username, id }) => {
                    return (
                        <Col span={4} key={id}>
                            <Card title={`Имя: ${name}`} bordered={false}>
                                {`Логин: ${username}`}
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default Users;
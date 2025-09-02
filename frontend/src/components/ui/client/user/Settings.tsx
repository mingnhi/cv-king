"use-client";
import {
    User,
    FileText,
    Bookmark,
    Send,
    Settings,
    X,
    Menu,
    ArrowLeft,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../common/card';
import { Separator } from '../../common/separator';
import { Button } from '../../common/button';
import { useApp } from '@/components/AppContext';
const MySettings = () => {
                return (
                    <div className="space-y-6">
                        <h1>Settings</h1>

                        <div className="grid gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Account Settings</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium">Email Address</label>
                                        <p className="text-sm text-gray-600">nguyen.van.a@email.com</p>
                                        <Button variant="outline" size="sm" className="mt-2">Change Email</Button>
                                    </div>
                                    <Separator />
                                    <div>
                                        <label className="text-sm font-medium">Password</label>
                                        <p className="text-sm text-gray-600">••••••••</p>
                                        <Button variant="outline" size="sm" className="mt-2">Change Password</Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Notification Preferences</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">Job Recommendations</p>
                                            <p className="text-sm text-gray-600">Receive personalized job suggestions</p>
                                        </div>
                                        <Button variant="outline" size="sm">Configure</Button>
                                    </div>
                                    <Separator />
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">Application Updates</p>
                                            <p className="text-sm text-gray-600">Get notified about application status changes</p>
                                        </div>
                                        <Button variant="outline" size="sm">Configure</Button>
                                    </div>
                                    <Separator />
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">Interview Reminders</p>
                                            <p className="text-sm text-gray-600">Receive reminders for upcoming interviews</p>
                                        </div>
                                        <Button variant="outline" size="sm">Configure</Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Privacy Settings</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">Profile Visibility</p>
                                            <p className="text-sm text-gray-600">Control who can see your profile</p>
                                        </div>
                                        <Button variant="outline" size="sm">Manage</Button>
                                    </div>
                                    <Separator />
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">Data Export</p>
                                            <p className="text-sm text-gray-600">Download a copy of your data</p>
                                        </div>
                                        <Button variant="outline" size="sm">Export</Button>
                                    </div>
                                    <Separator />
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">Delete Account</p>
                                            <p className="text-sm text-gray-600">Permanently delete your account and data</p>
                                        </div>
                                        <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                                            Delete
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                );
}
export default MySettings;
